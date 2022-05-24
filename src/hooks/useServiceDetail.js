import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});
console.log(service);
  useEffect(() => {
    const url = `https://secret-island-02232.herokuapp.com/service/${serviceId}`;
console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  return [service];
};

export default useServiceDetail;
