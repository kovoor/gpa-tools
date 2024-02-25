import { useState } from "react"

export default function GWAToGPACalculator() {
  const [gwa, setGWA] = useState("") // GWA Result
  const [finalGPA, setFinalGPA] = useState("") // Final GPA Result
  const [calculationSteps, setCalculationSteps] = useState([]) // Steps for calculation
  const [error, setError] = useState("") // Error message

  const validateInput = (input: string): boolean => {
    if (!input || isNaN(Number(input)) || Number(input) < 0 || Number(input) > 5) {
      setError("Please enter a valid GWA number between 0 and 5.")
      return false
    }
    setError("")
    return true
  }

  const calculateGWAToGPA = () => {
    if (!validateInput(gwa)) {
      return
    }
    // Assuming a linear mapping from GWA (1.0 to 5.0) to GPA (4.0 to 0.0)
    const gwaNum = parseFloat(gwa)
    // Adjust the conversion formula according to your specific criteria
    const gpa = ((5 - gwaNum) / 4) * 4
    setFinalGPA(gpa.toFixed(2)) // Keeping two decimal places for GPA
  }

  return (
    <div className="p-4 space-y-4 w-full max-w-5xl lg:max-w-2xl">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col gap-8 mt-4 mb-4">
        {" "}
        <div>
          <label htmlFor="tp" className="block text-xl font-bold space-y-2">
            GWA (General Weighted Average)
          </label>

          <div className="flex flex-row gap-2">
            <input
              type="float"
              id="tp"
              value={gwa}
              onChange={(e) => setGWA(e.target.value)}
              className="mt-1 block w-inherit rounded-md border-gray-300 shadow-sm  p-2 sm:text-sm w-3/4 dark:text-black"
              placeholder="Enter your GWA"
            />
          </div>
        </div>
        {/* <div>
          <label htmlFor="et" className="block text-xl font-bold space-y-2">
            GPA
          </label>

          <div className="flex flex-row gap-2">
            <p className="block self-center">RM</p>
            <input
              type="number"
              id="et"
              value={gpa}
              onChange={(e) => setGPA(e.target.value)}
              className="mt-1 block w-inherit rounded-md border-gray-300 shadow-sm  p-2 sm:text-sm w-3/4 dark:text-black"
              placeholder="Enter Amended Estimated Tax"
            />
          </div>
        </div> */}
      </div>

      <button
        onClick={calculateGWAToGPA}
        className="px-4 py-2 border-b font-bold border-gray-300 w-full  rounded-md backdrop-blur-2xl dark:border-neutral-800  dark:from-inherit lg:static lg:w-auto bg-zinc-800  mx-auto lg:rounded-xl lg:border dark:bg-gray-200 lg:bg-zinc-800 text-white lg:px-4 lg:py-2 lg:dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black dark:font-bold"
      >
        Convert
      </button>
      <div className="">
        {finalGPA && (
          <p className="mt-20 text-xl font-semibold">Result: {finalGPA} GPA (out of 4.0)</p>
        )}
      </div>
      <div className="border-b border-gray-300 backdrop-blur-2xl dark:border-neutral-800" />

      {finalGPA && (
        <div className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static rounded-xl lg:w-auto lg:rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30 lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
          <h3 className="text-md sm:text-lg font-semibold flex flex-row gap-2">Convert Details:</h3>
          <p className="whitespace-pre-wrap text-sm font-mono py-4">
            GWA of 1.0 (excellent) maps to a 4.0 GPA, and a GWA of 5.0 (fail) maps to a 0.0 GPA
          </p>
          <p className="whitespace-pre-wrap text-sm font-mono py-4">
            To compute your GWA with units, multiply each grade by its credit units, sum the
            results, and divide by the total credit units.
          </p>
        </div>
      )}
    </div>
  )
}
