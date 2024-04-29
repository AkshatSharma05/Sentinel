import './App.css'
import Navbar from './Navbar.jsx'
import { Line } from "react-chartjs-2";
import data from './data/moisture.json';
import data2 from './data/moisture copy.json';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
import GaugeComponent from 'react-gauge-component'

function App() {
  const graphData = data;
  const sampleData = graphData;
  const sampleData2 = data2;

  const canvasData = {
    datasets: [
      {
        label: "Home",
        borderColor: "navy",
        pointRadius: 0,
        fill: true,
        backgroundColor: 'white',
        lineTension: 0,
        data: sampleData,
        borderWidth: 1,
      },
    ],
  };

  const canvasData2 = {
    datasets: [
      {
        label: "Home",
        borderColor: "navy",
        pointRadius: 0,
        fill: true,
        backgroundColor: 'white',
        lineTension: 0,
        data: sampleData2,
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    tooltips: {
      mode: 'index',
      intersect: false
   },
   hover: {
      mode: 'index',
      intersect: false
   },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Temp'
      },
    },
  };

  const options2 = {
    tooltips: {
      mode: 'index',
      intersect: false
   },
   hover: {
      mode: 'index',
      intersect: false
   },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Humidity'
      },
    },
  };


  const graphStyle = {
    minHeight: "10rem",
    maxWidth: "540px",
    width: "100%",
    border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  /////////// GAUGE
  const options3 = {
    title: {
      display: true,
      text: 'Gauge chart'
    }
  };

  return (
    <div className="container">
      <label htmlFor="workers">Choose worker:</label>
      <select name="worker" id="workers">
        <option value="worker1">Worker1</option>
        <option value="worker2">Worker2</option>
        <option value="worker3">Worker3</option>
        <option value="worker4">Worker4</option>
      </select>
      <Navbar />
      <div className="bodyclass">
        <div className='graph'>
          <div style={graphStyle}>
            <Line id="home" options={options1} data={canvasData} />
          </div>
        </div>
        <div className='graph'>
          <div style={graphStyle}>
            <Line id="home" options={options2} data={canvasData2} />
          </div>
        </div>
        <div className='graph'>
          <div style={graphStyle} className='gauge'>
            Methane
            <GaugeComponent
              options={options3}
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: '#EA4228',
                    showTick: true
                  },
                  {
                    limit: 40,
                    color: '#F58B19',
                    showTick: true
                  },
                  {
                    limit: 60,
                    color: '#F5CD19',
                    showTick: true
                  },
                  {
                    limit: 80,
                    color: '#F5CD19',
                    showTick: true
                  },
                  {
                    limit: 100,
                    color: '#5BE12C',
                    showTick: true
                  },
                ]
              }}
              value={32}
            />
          </div>
        </div>
        <div className='graph'>
          <div style={graphStyle} className='gauge'>
            MQ-7
            <GaugeComponent
              options={options3}
              arc={{
                subArcs: [
                  {
                    limit: 20,
                    color: '#EA4228',
                    showTick: true
                  },
                  {
                    limit: 40,
                    color: '#F58B19',
                    showTick: true
                  },
                  {
                    limit: 60,
                    color: '#F5CD19',
                    showTick: true
                  },
                  {
                    limit: 80,
                    color: '#F5CD19',
                    showTick: true
                  },
                  {
                    limit: 100,
                    color: '#5BE12C',
                    showTick: true
                  },
                ]
              }}
              value={8}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
