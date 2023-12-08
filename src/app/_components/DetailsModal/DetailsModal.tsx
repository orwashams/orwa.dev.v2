"use client";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useI18n } from "~/locales/client";

type Props = {
  name: string;
};

const DetailsModal = ({ name }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const t = useI18n();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        bg={"#314155"}
        radius={"lg"}
        className="bg-green-700"
      >
        <div className="bg-red-500">
          <p>{name}</p>
          The Modal will be full screen only on mobile
        </div>
      </Modal>

      <Button onClick={open} className="bg-[#13172e]">
        {t("general.pick")}
      </Button>
    </>
  );
};

export default DetailsModal;
