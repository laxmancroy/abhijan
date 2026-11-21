const QuestionForm = () => {
    return (
        <div className="fixed inset-0 w-full h-dvh bg-black/60 backdrop-blur-xs flex items-center justify-center">
            <div className="w-full max-w-md bg-card rounded-lg border border-bdr">
                
                        <h2 className="text-xl font-bold py-2 px-4 border-b border-bdr">Add Question</h2>
                        <div className="">
                            <label htmlFor="">Programs</label>
                        <div className="flex items-center gap-">
                            <div className="bg-secondary text-secondary-fg border border-secondary-bdr hover:border-primary hover:bg-card px-2 py-1 rounded-lg hocus:bg-secondary-hocus cursor-pointer">DUET</div>
                            <div className="bg-secondary text-secondary-fg border border-secondary-bdr px-2 py-1 rounded-lg hocus:bg-secondary-hocus cursor-pointer">JOB</div>
                            <div className="bg-secondary text-secondary-fg border border-secondary-bdr px-2 py-1 rounded-lg hocus:bg-secondary-hocus cursor-pointer">Academic</div>
                            
                        </div>
                </div>
            </div>

        </div>
    )
}

export default QuestionForm;