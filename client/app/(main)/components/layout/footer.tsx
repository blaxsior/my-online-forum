interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="border-t-[1px] border-base-400 py-6 text-center">
      {children}
    </footer>
  );
};

export default Footer;
