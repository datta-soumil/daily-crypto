import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../index";
import { Container, HStack, Button , RadioGroup, Radio} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinsCard from "./CoinsCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoding(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        
        setCoins(data);
        setLoding(false);
      } catch (error) {
        setError(true);
        setLoding(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error while fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={"inr"}>₹</Radio>
              <Radio value={"usd"}>$</Radio>
              <Radio value={"eur"}>€</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinsCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                url={i.url}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={'full'} overflowX={'auto'} p={'8'} scrollBehavior={'smooth'}>
            {btns.map((item, index) => (
              <Button
                bgColor="blackAlpha.900"
                onClick={() => changePage(index + 1)}
                color={'white'}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
