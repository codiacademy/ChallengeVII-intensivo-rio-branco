/* eslint-disable no-unused-vars */
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import Header from "../components/Header";
import SalesOverviewChart from "../components/SalesOverviewChart";
import CategoryDistributionChart from "../components/CategoryDistributionChart";
import SalesChannelChart from "../components/SalesChannelChart";

const stats = [
	{ name: "Total Sales", icon: Zap, value: "$12.345", color: "#6366F1" },
	{ name: "New Users", icon: Users, value: "1,234", color: "#8B5CF6" },
	{ name: "Total Products", icon: ShoppingBag, value: "567", color: "#EC4899" },
	{ name: "Expenses", icon: BarChart2, value: "R$5.207", color: "#10B981" },
];



const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{stats.map((stat, index) => (
						<StatCard key={index} {...stat} />
					))}
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart/>	
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;