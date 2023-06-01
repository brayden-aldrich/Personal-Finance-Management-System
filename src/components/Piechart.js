import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale)

function Piechart({ chartData }) {

    return(
        <>
            <Pie data={chartData} options={{
                plugins: {
                    title: {
                        display: true,
                        text: "User's expenses"
                    }
                }
            }}/>
        </>
    )
}
export default Piechart;