import { applications } from "@/lib/data/applications"
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>
}

async function ApplicationPage({ params }: Props) {

    const { id } = await params;
    const application = applications.find((application) => application.id === id)

    if (!application) {
        return <main className="p-6">
            <h1 className="text-2xl font-bold">Application not found</h1>
            <div className="mt-8">

                <Link href="/dashboard" className="inline-flex gap-2 p-2 rounded-lg text-white justify-between bg-gray-900">
                    <ArrowLeft size={20} />
                    Dashboard
                </Link>
            </div>
        </main>
    }

    return (
        <main className="p-6">
            <div className="mb-8">
                <p className="text-sm text-gray-500">
                    {application.company}
                </p>
                <h1 className="text-3xl font-bold">{application.position}</h1>
            </div>

            <div className="max-w-2xl space-y-6 rounded-xl border p-6">
                <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="font-medium">{application.company}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{application.location}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p className="font-medium">{application.salary || "N/A"}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">{application.status}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Notes</p>
                    <p className="font-medium">{application.notes || "None"}</p>
                </div>
            </div>
        </main>
    )
}

export default ApplicationPage