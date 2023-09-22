function Layout({ children }) {
    return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 bg-cover bg-center" 
           style={{ backgroundImage: `url('/images/background.jpg')` }}>
        {children}
      </div>
    );
  }
  
  export default Layout;