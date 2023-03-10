import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useTezosCollectStore } from "../../store";
import LinkWithSearchParams from "../LinkWithSearchParams";
type AppProps = {
  onDisconnectWallet: () => Promise<void>;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
};
const Menu = (props: AppProps) => {
  const { activeAddress, profile } = useTezosCollectStore();
  const navigate = useNavigate();
  const SignOut = () => {
    props.onDisconnectWallet();
    props.setIsMenu(false);
    navigate("/home/primary");
  };
  return (
    <div className="absolute top-12 bg-white  w-32 right-0 menu-shadow">
      {profile?.artist && (
        <LinkWithSearchParams
          to={{
            pathname: "/mint",
          }}
        >
          <div
            className="px-4 py-2 hover:bg-gray-200"
            onClick={() => props.setIsMenu(false)}
          >
            Create
          </div>
        </LinkWithSearchParams>
      )}

      <LinkWithSearchParams
        to={{
          pathname: `/profile/${activeAddress}`,
        }}
      >
        <div
          className="px-4 py-2 hover:bg-gray-200"
          onClick={() => props.setIsMenu(false)}
        >
          Profile
        </div>
      </LinkWithSearchParams>
      <div
        className="px-4 py-2 hover:bg-gray-200"
        onClick={() => {
          SignOut();
        }}
      >
        Sign out
      </div>
    </div>
  );
};

export default Menu;
