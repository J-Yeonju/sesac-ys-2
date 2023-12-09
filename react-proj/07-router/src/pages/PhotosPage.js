import { useEffect, useState } from "react";

export default function PhotosPage() {
  const [photos, setPhotos] = useState();
  const [error, setError] = useState("Loading...");


  const getPhotos = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos`
      );
      if (res.ok) {
        const prod = await res.json();
        setPhotos(prod);
      } else {
        throw Error("존재하지 않는 사진입니다.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div>여기는 포토 페이지</div>
      {photos ? (
        <>
          {photos.map((value) => (
            <ul key={value.id}>
              <li>이미지 번호: {value.id}</li>
              <li>이미지 제목: {value.title}</li>
              <img src={`${value.thumbnailUrl}`}/>
            </ul>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}