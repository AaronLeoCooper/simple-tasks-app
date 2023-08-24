import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import "./App.css";
import { api } from "./api";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

function App() {
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const { handleSubmit, handleChange, values, isValid } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
      setSubmitted(true);
    },
  });

  const [apiLoading, setApiLoading] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    setApiLoading(true);

    api("https://httpbin.org/get", {
      method: "GET",
    })
      .then(() => {
        setApiLoading(false);
        setApiLoaded(true);
      })
      .catch((error) => {
        setApiLoading(false);
        setApiError(error.message);
      });
  }, []);

  return (
    <>
      {apiLoading && <p>Loading...</p>}
      {apiLoaded && <p>Loaded data!</p>}
      {apiError && <p>Error: {apiError}</p>}

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <form onSubmit={handleSubmit}>
        {!isValid && <p>Please fill out the form</p>}
        {submitted && <p>Thanks for submitting!</p>}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
