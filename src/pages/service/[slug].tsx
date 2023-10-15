import { MainContainer } from '@/containers';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Service: NextPage = () => {
  const { query } = useRouter();
  return <MainContainer>Service item</MainContainer>
};

export default Service;