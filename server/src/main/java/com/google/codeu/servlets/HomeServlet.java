@WebServlet("/home")
public class HomeServlet extends HttpServlet {

  /**
   * Returns HTML that contains a form. The form submits to Blobstore,
   * which redirects to our /my-form-handler, which is handled by FormHandlerServlet.
   */
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the Blobstore URL
    BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
    String uploadUrl = blobstoreService.createUploadUrl("/my-form-handler") ;

    response.setContentType("text/html");

    // This demonstrates creating a form that uses the Blobstore URL.
    // This is not how you'd do this in a real codebase!
    // See the hello-world-jsp or hello-world-fetch examples for more info.
    ServletOutputStream out = response.getOutputStream();
    out.println("<form method=\"POST\" enctype=\"multipart/form-data\" action=\"" + uploadUrl + "\">");

    out.println("<p>Type some text:</p>");
    out.println("<textarea name=\"message\"></textarea>");
    out.println("<br/>");

    out.println("<p>Upload an image:</p>");
    out.println("<input type=\"file\" name=\"image\">");
    out.println("<br/><br/>");

    out.println("<button>Submit</button>");
    out.println("</form>");
  }
}
