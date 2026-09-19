import { Application } from "@/lib/data/applications"
import { ApplicationStatus } from "@/lib/data/applications";
interface Props {
    applications: Application[]
}

function StatusChart({ applications }: Props) {
    const statuses: ApplicationStatus[] = [
        "SAVED",
        "APPLIED",
        "INTERVIEW",
        "OFFER",
        "REJECTED",
    ];
    const total = applications.length
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Application Status
                </h2>
                <p className="text-sm text-gray-500">Breakdown of your current applications</p>
            </div>

            <div className="space-y-5">
                {statuses.map((status) => {
                    const count = applications.filter((application) => application.status === status).length
                    const percentage = total > 0 ? (count / total) * 100 : 0
                    return (<div key={status}>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="font-medium">
                                {status}
                            </span>
                            <span className="text-gray-500">{count}</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-gray-900" style={{ width: `${percentage}%` }} />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default StatusChart