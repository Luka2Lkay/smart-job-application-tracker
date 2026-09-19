
interface Props {
    total: number;
    applied: number;
    interviews: number;
    offers: number
}

function StatsCard({ total, applied, interviews, offers }: Props) {

    const stats = [
        {
            label: "Total Applications",
            value: total,
        },
        {
            label: "Applied",
            value: applied,
        },
        {
            label: "Interviews",
            value: interviews,
        },
        {
            label: "Offers",
            value: offers,
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border bg-white p-5 shadow-sm">
                    <p className="text-sm text-gray-500">
                        {stat.label}
                    </p>

                    <p className="mt-2 text-3xl font-bold text-gray-900">
                        {stat.value}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default StatsCard