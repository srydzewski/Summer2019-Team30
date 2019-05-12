package com.github.whaleshop.servlets;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/gap/logout")
public class LogoutServlet extends HttpServlet {
  private static final Logger log = Logger.getLogger(LogoutServlet.class.getName());

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    log.info("doGet()");
    UserService userService = UserServiceFactory.getUserService();
    String googleLogoutUrl = userService.createLogoutURL("/");
    response.sendRedirect(googleLogoutUrl);
  }
}
