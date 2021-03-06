const API_KEY = "97cedad43bd4ca832c9ecd9de8a27f3c";

const BASE_URL = "https://api.themoviedb.org";

export interface IData {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title?: string;
  name?: string;
  overview: string;
  genres?: IGenre[];
  vote_average?: number;
}

interface IGenre {
  id: number;
  name: string;
}

export interface IGetDatas {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IData[];
  total_pages: number;
  total_results: number;
}
//movie
export const getMovies = async () => {
  return await (
    await fetch(
      `${BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=kr`
    )
  ).json();
};

export const ratedMovies = async () => {
  return await (
    await fetch(
      `${BASE_URL}/3/movie/top_rated?api_key=${API_KEY}&language=ko&page=1&region=kr`
    )
  ).json();
};

export const upcomingMovies = async () => {
  return await (
    await fetch(
      `${BASE_URL}/3/movie/upcoming?api_key=${API_KEY}&language=ko&page=1&region=kr`
    )
  ).json();
};

//TV shows
export const getTvShows = async () => {
  return await (
    await fetch(
      ` ${BASE_URL}/3/tv/popular?api_key=${API_KEY}&language=ko&page=1`
    )
  ).json();
};

export const airingToday = async () => {
  return await (
    await fetch(
      `${BASE_URL}/3/tv/airing_today?api_key=${API_KEY}&language=ko&page=1`
    )
  ).json();
};

export const ratedTv = async () => {
  return await (
    await fetch(
      `${BASE_URL}/3/tv/top_rated?api_key=${API_KEY}&language=ko&page=1`
    )
  ).json();
};

//search
export const searchMovie = async (keyword: string | null) => {
  return await (
    await fetch(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=ko&query=${keyword}&page=1&include_adult=false`
    )
  ).json();
};

export const searchTv = async (keyword: string | null) => {
  return await (
    await fetch(
      `${BASE_URL}/3/search/tv?api_key=${API_KEY}&language=ko&page=1&query=${keyword}&include_adult=false`
    )
  ).json();
};

//genre

export const genreMovie = async (id: string | null) => {
  return await (
    await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=ko`)
  ).json();
};

export const genreTv = async (id: string | null) => {
  return await (
    await fetch(`${BASE_URL}/3/tv/${id}?api_key=${API_KEY}&language=ko`)
  ).json();
};
