import { useRef, useState } from 'react';
import { useController, type Control } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FileInputProps {
  name: string;
  control: Control<any>;
  accept?: string;
  multiple?: boolean;
  rules?: Record<string, any>;
  label?: string;
  errorMessage?: string;
}

const FileInput = ({
  name,
  control,
  accept = 'image/*',
  multiple = false,
  rules = {},
  label = 'Завантажити фото',
  errorMessage = 'Будь ласка, виберіть файл',
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    field: { onChange, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: {
      validate: (value) => {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          return errorMessage;
        }
        return true;
      },
      ...rules
    },
    defaultValue: multiple ? [] : null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setPreview(null);
      onChange(multiple ? [] : null);
      return;
    }

    // Якщо вибрано файл, оновлюємо значення у формі
    const selectedFiles = multiple ? Array.from(files) : files[0];
    onChange(selectedFiles);

    // Створюємо URL для перегляду зображення
    if (files[0].type.startsWith('image/')) {
      const fileUrl = URL.createObjectURL(files[0]);
      setPreview(fileUrl);
    } else {
      setPreview(null);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setPreview(null);
    onChange(multiple ? [] : null);
  };

  // Прибираємо об'єкт URL при розмонтуванні компонента
  // useEffect(() => {
  //   return () => {
  //     if (preview) {
  //       URL.revokeObjectURL(preview);
  //     }
  //   };
  // }, [preview]);

  const hasFile = multiple
    ? Array.isArray(value) && value.length > 0
    : value !== null && value !== undefined;

  return (
    <div className="mb-4">
      <div
        onClick={handleClick}
        className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
          error ? 'border-red-400 bg-red-50' : 'border-emerald-300 bg-emerald-50 hover:bg-emerald-100'
        }`}
      >
        <input
          type="file"
          ref={(e) => {
            ref(e);
            if (inputRef) {
              inputRef.current = e;
            }
          }}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          className="hidden"
        />

        {preview ? (
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={preview}
              alt="Preview"
              className="max-h-48 mx-auto rounded-lg shadow-md"
            />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              type="button"
              onClick={clearFile}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <svg
              className={`h-14 w-14 mb-2 ${error ? 'text-red-400' : 'text-emerald-500'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div className={`font-medium ${error ? 'text-red-600' : 'text-emerald-700'}`}>
              {hasFile
                ? (multiple ? `${(value as File[]).length} файлів вибрано` : `${(value as File).name}`)
                : label}
            </div>
            <p className={`text-sm mt-1 ${error ? 'text-red-500' : 'text-gray-500'}`}>
              {error ? error.message : 'Натисніть або перетягніть файл сюди'}
            </p>
          </div>
        )}
      </div>
      {error && !preview && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
};

export default FileInput;
