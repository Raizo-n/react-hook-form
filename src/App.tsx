import "./App.css";
import { useForm } from "react-hook-form";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "You must type your name.",
            minLength: {
              value: 3,
              message: "Your name must be at least 3 characters.",
            },
          })}
        />
        <p>{errors.name?.message as React.ReactNode}</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "You must type your Email." })}
        />
        <p>{errors.email?.message as React.ReactNode}</p>

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "You must type your password.",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters.",
            },
          })}
        />
        <p>{errors.password?.message as React.ReactNode}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
