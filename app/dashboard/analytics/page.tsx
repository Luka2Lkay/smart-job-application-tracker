import { applications } from "@/lib/data/applications"

function AnalyticsPage() {

    const statuses = [
        "SAVED",
        "APPLIED",
        "INTERVIEW",
        "OFFER",
        "REJECTED",
    ]

    return (
        <main className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Analytics</h1>
                <p className="mt-2 text-gray-500">Understand your job search activity.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {statuses.map((status) => {
                    const count = applications.filter((application) => application.status === status).length;

                    return (
                        <div key={status} className="rounded-xl border p-5">
                            <p className="text-sm text-gray-500">{status}</p>
                            <p className="mt-2 text-3xl font-bold">{count}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default AnalyticsPage