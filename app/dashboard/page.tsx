import StatsCard from "@/components/dashboard/StatsCard"
import StatusChart from "@/components/dashboard/StatusChart"
import RecentApplications from "@/components/dashboard/RecentApplications"
import { applications } from "@/lib/data/applications"

function DashboardPage() {
    const total = applications.length
    const applied = applications.filter((application) => application.status === "APPLIED").length
    const interviews = applications.filter((application) => application.status === "INTERVIEW").length
    const offers = applications.filter((application) => application.status === "OFFER").length
    return (
        <main className="space-y-8 p-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-2 text-gray-500">Track and manage your job applications</p>
            </div>

            <StatsCard offers={offers} applied={applied} interviews={interviews} total={total} />

            <div className="grid gap-6 lg:grid-cols-2">
                <StatusChart applications={applications} />
                <RecentApplications applications={applications}/>
            </div>
        </main>
    )
}

export default DashboardPage