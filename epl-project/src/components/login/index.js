import React from "react";
import DefaultLayout from "../layout/index";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Alert from '@material-ui/lab/Alert';

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop : theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [username,setUsername] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [error,setError] = React.useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username!= "nvh@gmail.com" || password!= "123456")
    {
      setError("Sai tên đăng nhập hoặc mật khẩu");
      return;
    }
    const props=JSON.parse(localStorage.getItem("data","calendar"));
    if(props)
    {
      localStorage.setItem("user",JSON.stringify({name:"nvh"}));
      if(props.data == "detailNews")
      {
        history.push("/detailNews");
      }
      else
      {
        history.push({pathname:`/calendar/${props.data.id}`,state:{isAuth:true , isBook:false}});
      }
    }
    else{
      localStorage.setItem("user",JSON.stringify({name:"nvh"}));
      history.push("/home");
    }
}
  return (
    <DefaultLayout>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.body}
      >
        <Grid item xs={6} container alignItems="center" justify="center">
          
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ color: "rgb(61, 25, 91)" }}
            >
              Đăng nhập
            </Typography>
            {error!="" ?  <Alert severity="warning" fullWidth>{error}</Alert> : <></>}
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <Grid item container alignItems="center" justify="flex-start">
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ghi nhớ đăng nhập"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{backgroundColor:"rgb(61, 25, 91)"}}
                color="primary"
                className={classes.submit}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}
