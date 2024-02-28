import { useFetchAlbumsQuery } from '../store';

function AlbumsList({ user }) {
  // (user) is what is passed to endpoints > fetchAlbums > query in the albumsApi.js
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data, error, isLoading);

  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
