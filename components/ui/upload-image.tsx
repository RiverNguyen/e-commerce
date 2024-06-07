"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
interface ImageUploadProps {
    disable?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    disable,
    onChange,
    onRemove,
    value,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpLoad = (result: any) => {
        onChange(result.info.secure_url);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url) => {
                    return (
                        <div
                            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
                            key={url}
                        >
                            <div className="z-10 absolute top-2 right-2">
                                <Button
                                    onClick={() => onRemove(url)}
                                    variant="destructive"
                                    size="icon"
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                            <Image
                                fill
                                className="object-cover "
                                alt="image"
                                src={url}
                            />
                        </div>
                    );
                })}
            </div>
            <CldUploadWidget onUpload={onUpLoad} uploadPreset="ihvqlcxf">
                {({ open }) => {
                    const handleClick = () => {
                        open();
                    };
                    return (
                        <Button
                            type="button"
                            disabled={disable}
                            variant="secondary"
                            onClick={handleClick}
                        >
                            <ImagePlus className="h-4 w-4 mr-2" />
                            Upload an Image
                        </Button>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUpload;
