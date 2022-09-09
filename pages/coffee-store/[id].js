import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      Coffee Store Page {router.query.id}
      {/* Non dynamic */}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      {/* Dynamic */}
      <Link href="/coffee-store/dynamic">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
