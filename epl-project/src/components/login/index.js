import React from "react";
import DefaultLayout from "../layout/index";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from "./../calendar/index"

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

  const handleSubmit=()=>{
    history.push({pathname:'/calendar',state:{isAuth:true}})
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
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
                onClick={handleSubmit}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
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
