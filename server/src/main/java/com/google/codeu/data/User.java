package com.google.codeu.data;

public class User {

  private String email;
  private String aboutMe;
  private String profilePic;

  public User(String email, String aboutMe) {
    this.email = email;
    this.aboutMe = aboutMe;
    this.profilePic = "://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg";
  }

  public User(String email, String aboutMe, String pic) {
    this.email = email;
    this.aboutMe = aboutMe;
    this.profilePic = pic;
  }

  public String getEmail() {
    return email;
  }

  public String getAboutMe() {
    return aboutMe;
  }

  public String getProfilePic() {
    return profilePic;
  }
}
