package com.github.whaleshop.servlets;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/gap/login")
public class LoginServlet extends HttpServlet {
  private static final Logger log = Logger.getLogger(LoginServlet.class.getName());

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    log.info("doGet()");
    UserService userService = UserServiceFactory.getUserService();

    // If the user is already logged in, redirect to the home page.
    if (userService.isUserLoggedIn()) {
      String user = userService.getCurrentUser().getEmail();
      response.sendRedirect("/");
      return;
    }

    // Redirect to Google login page. That page will then redirect back to /login,
    // which will be handled by the above if statement.
    String googleLoginUrl = userService.createLoginURL("/gap/login");
    response.sendRedirect(googleLoginUrl);
  }
}
