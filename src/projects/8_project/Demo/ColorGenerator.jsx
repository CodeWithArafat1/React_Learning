import React, { useEffect, useState } from "react";
import Values from "values.js";
import ColorBox from "./ColorBox";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(new Values("#285bc9").all());
  const [err, setErr] = useState(false);



  const [copyCount, setCopyCount] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const newData = copyCount.map((item, index) => {
      return {
        name: `Copid ${index + 1}`,
        count: index + 1,
      };
    });
    return setChartData(newData);
  }, [copyCount]);

  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      if (color === "") {
        toast.warn(`Input con't be empty`);
        return;
      }
      const colorArr = new Values(color).all();
      setColors(colorArr);
      setErr(false);
      setColor("");
    } catch {
      setColor("");
      setErr(true);
      console.log(err.message);
      setColors([]);
      toast.error(`Invalid Color code ${color}`);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Color Generator</h1>
      <div className="my-5">
        <form onSubmit={handelSubmit}>
          <label htmlFor="color">Generate Color</label>
          <div className="flex items-center">
            <input
              type="text"
              id="color"
              name="color"
              className="outline-1 outline-blue-600 py-2 px-3 mr-2 rounded-md"
              placeholder="#285bc9"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <button className="btn btn-secondary">Generate Color</button>
          </div>
        </form>
        {err && <p className="text-red-600 ">Place Enter Valid Color Code</p>}
      </div>
      <div className="grid grid-cols-4 ">
        {colors.map((color, ind) => {
          const hex = `#${color.hex}`;
          return (
            <ColorBox
              key={ind}
              {...color}
              hex={hex}
              ind={ind}
              setCopyCount={setCopyCount}
            />
          );
        })}
      </div>

        {chartData.length > 0 && ( <div className="max-w-5xl mx-auto mt-10 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={1} height={150} data={chartData}>
            <Bar dataKey={"count"} fill="#8884d8" />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip />
            <LabelList
              dataKey={"name"}
              position="top"
            />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>)}
     
    </>
  );
};

export default ColorGenerator;
