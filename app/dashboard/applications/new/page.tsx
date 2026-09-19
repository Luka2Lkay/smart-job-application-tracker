function NewApplicationPage() {
    return (
        <main className="p-6 mx-auto rounded-lg border border-gray-300 w-[80%]">
            <div className="mb-8 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold">Add Application</h1>
                <p className="mt-2 text-gray-500">Add a new job application to your tracker.</p>
            </div>

            <form className="max-w-2xl space-y-6 mx-auto">
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Company
                    </label>
                    <input type="text" placeholder="e.g Google" className="w-full border rounded-lg px-4 py-3" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Position
                    </label>
                    <input type="text" placeholder="e.g Software Engineer" className="w-full border rounded-lg px-4 py-3" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Location
                    </label>
                    <input type="text" placeholder="e.g Cape Town" className="w-full border rounded-lg px-4 py-3" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Job URL
                    </label>
                    <input type="url" placeholder="e.g https://..." className="w-full border rounded-lg px-4 py-3" />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Status
                    </label>
                    <select className="w-full border rounded-lg px-4 py-3">
                        <option value="SAVED">saved</option>
                        <option value="APPLIED">Applied</option>
                        <option value="INTERVIEW">Interview</option>
                        <option value="OFFER">Offer</option>
                        <option value="REJECTED">Rejected</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Notes
                    </label>
                    <textarea rows={5} placeholder="Add notes about this application..." className="w-full rounded-lg border px-4 py-3" />
                </div>

                <button type="submit" className="rounded-lg bg-black px-5 py-3 text-white">
                    Save Appliaction
                </button>
            </form>
        </main>
    )
}

export default NewApplicationPage