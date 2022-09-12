import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slice";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  user: string,
  password: string,
};

function PageLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    if (true) {
      const {user} = data;
      console.log(user);
      const action = setUser(user);
      dispatch(action);
      navigate("/dashboard");
    }
  }

  return (
    <div>
      <h1>Page Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <TextField id="user" {...register("user")} label="Username or Email" variant="outlined" size="small" fullWidth={true}/> 
        </div>
        <div>
          <TextField id="password" {...register("password")} label="password" type="Password" variant="outlined" size="small" fullWidth={true} />
        </div>
        <div>
          <Button type="submit" variant="contained" fullWidth={true}>Log In</Button>
        </div>
      </form>
    </div>
  );
}

export default PageLogin;
