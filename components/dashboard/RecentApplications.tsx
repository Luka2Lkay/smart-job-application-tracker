import Link from "next/link"
import { Application } from "@/lib/data/applications"

interface Props {
    applications: Application[]
}

function RecentApplications({ applications }: Props) {

    const recentApplications = applications.slice(0, 5)

    return (
        <div className="rounded-xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b p-5">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
                    <p className="text-sm text-gray-500">Your latest job applications.</p>
                </div>

                <Link href="dashboard/applications" className="text-sm font-medium text-gray-900 hover:underline">
                    View All
                </Link>
            </div>

            <div className="divide-y">
                {recentApplications.map((recentApplication) => (
                    <Link key={recentApplication.id} href={`/dashboard/applications/${recentApplication.id}`} className="flex items-center justify-between p-5 transition hover:bg-gray-50">
                        <div>
                            <p className="font-medium text-gray-900">{recentApplication.position}</p>
                            <p className="mt-1 text-sm text-gray-500">{recentApplication.company}</p>
                        </div>
                        <span className="rounded-full border px-3 py-1 text-xs font-medium">{recentApplication.status}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RecentApplications