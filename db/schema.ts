import { user } from "./auth-schema";

export * from "./auth-schema";

import {
  pgTable,
  pgEnum,
  serial,
  text,
  jsonb,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

// ১. ফিক্সড ভ্যালুগুলোর জন্য Enums
export const programEnum = pgEnum("program_type", ["DUET", "JOB", "ACADEMIC"]);
export const categoryEnum = pgEnum("category_type", [
  "DEPARTMENT",
  "NON_DEPARTMENT",
]);
export const questionTypeEnum = pgEnum("question_type", [
  "MCQ",
  "WRITTEN",
  "VIVA",
]);
export const statusEnum = pgEnum("question_status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);

// এমসিকিউ অপশনের TypeScript টাইপ
export type McqOption = {
  id: "A" | "B" | "C" | "D";
  text: string;
  isCorrect: boolean;
};

// ২. সাবজেক্ট টেবিল (ভবিষ্যতে সহজেই নতুন সাবজেক্ট অ্যাড করা যাবে)
export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(), // যেমন: "Civil", "Electrical", "Bangla", "Math"
  category: categoryEnum("category").notNull(), // DEPARTMENT অথবা NON_DEPARTMENT
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ৩. মূল প্রশ্ন টেবিল
export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),

  // --- বাধ্যতামূলক ফিল্ড (Required Fields) ---
  questionText: text("question_text").notNull(),
  type: questionTypeEnum("type").notNull(), // MCQ, WRITTEN, VIVA
  programs: programEnum("programs").array().notNull(), // যেমন: ['DUET', 'JOB']
  category: categoryEnum("category").notNull(), // DEPARTMENT বা NON_DEPARTMENT
  subjectId: integer("subject_id")
    .notNull()
    .references(() => subjects.id, { onDelete: "restrict" }),
  chapter: text("chapter").notNull(), // ম্যানুয়ালি লেখা অধ্যায়ের নাম

  // --- ঐচ্ছিক ও কন্ডিশনাল ফিল্ড (Optional / Conditional Fields) ---
  questionImage: text("question_image"), // প্রশ্নে ছবি থাকলে তার URL
  options: jsonb("options").$type<McqOption[]>(), // শুধুমাত্র MCQ হলে ৪টি অপশন থাকবে, নাহলে NULL
  answer: text("answer"), // Written বা Viva এর উত্তর
  explanation: text("explanation"), // উত্তরের ব্যাখ্যা
  explanationImage: text("explanation_image"), // ব্যাখ্যায় ছবি থাকলে তার URL
  source: text("source"), // যেমন: "Foundation বইয়ের 6th Edition এর 171 পেজ এর 7.11 নম্বর"
  boards: text("boards").array(), // যেমন: ['Dinajpur-24', 'Rajshahi-20']

  // --- অ্যাপ্রুভাল ও ট্র্যাকিং সিস্টেম (Moderation & Audit) ---
  status: statusEnum("status").default("PENDING").notNull(),
  createdBy: text("created_by")
    .notNull()
    .references(() => user.id, { onDelete: "restrict" }),
  approvedBy: text("approved_by").references(() => user.id, {
    onDelete: "set null",
  }),
  approvedAt: timestamp("approved_at"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
