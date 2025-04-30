import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { fetchRevenue } from '@/app/lib/data';


export default async function Page(){
    const revenue = await fetchRevenue();
    return(
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
      </div>
    )
}