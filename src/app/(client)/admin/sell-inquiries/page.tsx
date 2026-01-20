import { SearchParams } from "next/dist/server/request/search-params";

interface Props {
  searchParams: Promise<SearchParams>;
}

const ContactInquiresPage = async ({ searchParams }: Props) => {
  return <section>Sell inquiries</section>;
};

export default ContactInquiresPage;
