import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

import { TClient, TClientArray } from "../types/TClient";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients: React.FC = () => {
  const [clientData, setClientData] = useState<TClientArray | null>(null);
  const { loading, error, data } = useQuery(GET_CLIENTS);

  useEffect(() => {
    if (data) {
      setClientData(data.clients);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  console.log(data);

  return (
    <>
      {!loading &&
        clientData?.map((client: TClient) => {
          return <p key={client.id}>{client.name}</p>;
        })}
    </>
  );
};

export default Clients;
