import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaFemale, FaMale, FaUserTie, FaUsers } from "react-icons/fa";
import useBioData from "../../../Hooks/useBioData";



const AdminHome = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [data] = useBioData();
    const male = data.filter(item => item.category === 'male');
    const female = data.filter(item => item.category === 'female');
    console.log(male, female);

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    // const male = stats?.filter(item=>item.category=== 'male');
    // console.log(male);

    // custom pie chart
    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

    // const piChartData=stats.map(data=>{
    //     return {name:data.BioData,value:data.revenue}
    // })
    // const name=stats.BioData
    // const value=stats.revenue
    // const data={name,value}

    return (
        <div>
            <h2 className="text-5xl mt-3 ml-2">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

            <div className="stats shadow w-full h-36 mt-4 gap-4">

                <div className="stat bg-violet-300">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-3xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>


                </div>


                <div className="stat bg-slate-500">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats?.users}</div>

                </div>

                <div className="stat bg-emerald-400">
                    <div className="stat-figure text-secondary">
                        <FaUserTie></FaUserTie>
                    </div>
                    <div className="stat-title">Total BioData</div>
                    <div className="stat-value">{stats?.BioData}</div>

                </div>

            </div>

            <div className="stats shadow w-full h-36 mt-4 gap-4">

                <div className="stat bg-rose-400">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Booking</div>
                    <div className="stat-value">${stats?.Booking}</div>


                </div>


                <div className="stat bg-slate-500">
                    <div className="stat-figure text-secondary">
                        <FaMale className="text-3xl"></FaMale>
                    </div>
                    <div className="stat-title">MaleBioData</div>
                    <div className="stat-value">{male?.length}</div>

                </div>

                <div className="stat bg-red-300">
                    <div className="stat-figure text-secondary">
                        <FaFemale></FaFemale>
                    </div>
                    <div className="stat-title">Female BioData</div>
                    <div className="stat-value">{female?.length}</div>

                </div>

            </div>
                {/*pie chart */}
            <div >
            {/* <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart> */}
            </div>

        </div>
    );
};

export default AdminHome;