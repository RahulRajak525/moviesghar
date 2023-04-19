import axios from "axios";

class apiMoviesServices {
  static getInstance() {
    return new apiMoviesServices();
  }

  getTrandingTrailer = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=84dfffc3b37cb52533d1ab1bdab9d2ff"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  getHeartWarming = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=84dfffc3b37cb52533d1ab1bdab9d2ff&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false&limit=20"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  getLanguages = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/configuration/languages?api_key=84dfffc3b37cb52533d1ab1bdab9d2ff"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
export const ApiMoviesServices = apiMoviesServices.getInstance();
