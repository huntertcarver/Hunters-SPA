import { Image, Modal } from "@mantine/core";

interface ImagePreviewModalProps {
  opened: boolean;
  imageSrc: string;
  onClose: () => void;
  imageClassName?: string;
}

export default function ImagePreviewModal({
  opened,
  imageSrc,
  onClose,
  imageClassName,
}: ImagePreviewModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} size="50%">
      <Image className={imageClassName} src={imageSrc} />
    </Modal>
  );
}
