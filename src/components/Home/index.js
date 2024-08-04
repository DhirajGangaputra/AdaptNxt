import './index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { IoMdInformationCircleOutline } from "react-icons/io";

const data =[
    {
        date: '6/20/2024 - 7/6/2024',
        Orders: 1600,
        Sales: 1400,
    },
    {
        date: '7/7/2024 - 7/12/2024',
        Orders: 800,
        Sales: 800,
    },
    {
        date: '7/21/2024 - 7/27/2024',
        Orders: 800,
        Sales: 500,
    }
]

const piechartData= [
    {
        name:"Shopify Store", value:2678.78
    },
    {
        name:"WebCommerce Store", value:3380.922
    }
]

const COLORS = ['#9dfaeb', '#f58f71'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Home = () =>{
    return(
        <div className="app-container">
            <div className="option-container">
            <ul className="list-container">
                <li>
                    <button type="button" className="dashboard-btn">Dashboard</button>
                </li>
                <li>
                    <button type="button" className="other-btns">Inventory</button>
                </li>
                <li>
                    <button type="button" className="other-btns">Order</button>
                </li>
                <li>
                    <button type="button" className="other-btns">Returns</button>
                </li>
                <li>
                    <button type="button" className="other-btns">Customers</button>
                </li>
                <li>
                    <button type="button" className="other-btns">Shipping</button>
                </li>
                <li>
                    <button type="button" className="other-btns">Channel</button>
                </li>
                <li>
                    <button type="button" className="other-btns">Integrations</button>
                </li>
                <li>
                    <select className="dropbox">
                        <option>Calculators</option>
                    </select>
                </li>
                <li>
                    <select className="dropbox">
                        <option>Reports</option>
                    </select>
                </li>
                <li>
                    <select className="dropbox">
                        <option>Account</option>
                    </select>
                </li>
            </ul>
            </div>
            <div className="dashboard-container">
                <div className="navbar-container">
                    <button type="button" className="nav-tab">Dashboard</button>
                </div>
                <div className="data-representation-container">
                    <div className="bargraph-container">
                        <div className='heading-container'>
                            <h1 className='chart-heading'>Sales vs Orders</h1>
                            <h1 className='info-icon'><IoMdInformationCircleOutline /></h1>
                        </div>
                        <hr className='hr-line'/>
                        <LineChart
                                width={800}
                                height={600}
                                data={data}
                                margin={{
                                    top: 25,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Orders" stroke="orange" />
                        <Line type="monotone" dataKey="Sales" stroke="green" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                    <div className="piechart-container">
                        <div className='heading-container'>
                            <h1 className='chart-heading'>Portion of Sales </h1>
                            <h1 className='info-icon'><IoMdInformationCircleOutline /></h1>
                        </div>
                        <hr className='hr-line'/>
                        <PieChart width={450} height={500}>
                            <Pie
                                data={piechartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={180}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            </PieChart>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default Home