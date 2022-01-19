import { Button } from "../Button/Button";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../modules/user";
import { useForm, Controller } from "react-hook-form";
import './RegisterForm.css'

function RegisterForm(props) {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      fullName: '',
      password: ''
    }
  });
  const navigate = useNavigate();

  const onSubmit = async data => {
    const {email, password, fullName} = data;
    const name = fullName.split(" ")[0];
    const surname = fullName.split(" ")[1];
    await props.register({
      email,
      password,
      name,
      surname
    });
    if (props.isLoggedIn) {
      navigate("/");
    }
  }

  return (
    <Box>
      <form className="form register" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <div className="form__header">
            <h2>Регистрация</h2>
          </div>
          <div className="form__content">
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: {value: true, message: "Поле обязательно для заполнения" },
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Поле заполнено неправильно"
              } }}
              render={({ field }) => <TextField {...field} label="Email" variant="standard" sx={{ width: "100%", mb: "35px"}} />}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            <Controller
              name="fullName"
              control={control}
              rules={{ required: {value: true, message: "Поле обязательно для заполнения" } }}
              render={({ field }) => <TextField {...field} label="Как вас зовут?" variant="standard" sx={{ width: "100%", mb: "35px"}} />}
            />
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
            <Controller
              name="password"
              control={control}
              rules={
                { required: 
                  {
                    value: true, 
                    message: "Поле обязательно для заполнения"
                  }, 
                  minLength: 
                  {
                    value: 6, 
                    message: "Минимальная длина пароля - 6 символов"
                  } 
              }}
              render={({ field }) => <TextField {...field} label="Пароль" variant="standard" sx={{ width: "100%", mb: "30px"}} type="password" autoComplete="current-password"/>}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
            <Button caption="Зарегистрироваться" type="submit" />
            <div className="form__footer">
              Уже зарегистрированы?
              <Link to="/login">Войти</Link>
            </div>
          </div>
        </div>
      </form>
    </Box>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.user.isLoggedIn}),
  { register }
)(RegisterForm);