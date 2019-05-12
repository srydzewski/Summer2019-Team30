package com.github.whaleshop.servlets;

import com.github.whaleshop.proto.LoginStatus;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.protobuf.util.JsonFormat;
import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/gap/login_status")
public class LoginStatusServlet extends HttpServlet {
  private static final Logger log = Logger.getLogger(LoginStatusServlet.class.getName());

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    log.info("doGet()");
    UserService userService = UserServiceFactory.getUserService();
    boolean isLoggedIn = userService.isUserLoggedIn();

    LoginStatus.Builder status =
        LoginStatus.newBuilder().setIsLoggedIn(userService.isUserLoggedIn());

    if (isLoggedIn) {
      status.setEmail(userService.getCurrentUser().getEmail());
    }
    response.setContentType("application/json");
    response.getWriter().println(JsonFormat.printer().print(status.build()));
  }
}
