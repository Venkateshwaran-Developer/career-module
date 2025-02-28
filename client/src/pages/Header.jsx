import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarServicesOpen, setIsSidebarServicesOpen] = useState(false);
  const [isSidebarStrategyOpen, setIsSidebarStrategyOpen] = useState(false);
  const [openSidebarSubMenu, setOpenSidebarSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsSidebarServicesOpen(false);
      setIsSidebarStrategyOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md h-16 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="superlabs-logo" className="w-32 h-auto" />
      </div>
      <ul className="hidden lg:flex  space-x-6 text-gray-700 font-semibold ml-auto">
        <li>
          <NavLink target="_blank" to="https://superlabs.co/featured"  className="hover:text-red-500">
            Work
          </NavLink>
        </li>
        <li
          className="relative cursor-pointer"
        >
          <NavLink target="_blank"
            to="https://superlabs.co/services"
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            
            }}
          >
            Services
            <RiArrowDropDownFill className="inline-block text-xs ml-1 text-red-500 size-5" />
          </NavLink>
          {isDropdownOpen && (
            <div
              className="absolute z-50 h-[450px] left-[-920px] w-[1150px] text-sm bg-white shadow-md rounded-lg py-3 px-10 grid grid-cols-3 mt-12 gap-4"
              
            >
              <div className="gap-4">
                <div className="mb-3">
                  <h4 className="text-sm font-bold text-red-500">
                    <NavLink target="_blank" to="https://superlabs.co/resource-augmentation.php">
                    RESOURCE AUGMENTATION
                    </NavLink>
                  </h4>
                  <ul className="grid grid-cols-2 py-5">
                    <div className="space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/dotnet-developer.php">Dot Net Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/full-stack-developer.php">Full Stack Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/web-developer.php">Web Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/angularjs-developer.php">AngularJS Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/ios-developer.php">iOS Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/android-developer.php">Android Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/java-developer.php">Java Developer</NavLink>
                      </li>
                    </div>
                    <div className="space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/flutter-developer.php">Flutter Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/nodejs-developer.php">NodeJS Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/javascript-developer.php">JavaScript Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/app-developer.php">App Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/machine-learning-developer.php">Machine Learning Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/back-end-developer.php">Back End Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/front-end-developer.php">Front End Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/quality-assurance-specialist.php">Quality Assurance Developer</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/security-engineers.php">Security Engineers</NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="grid col-span-2">
                <div className="">
                  <h4 className="text-sm font-bold text-red-500">
                    <NavLink target="_blank" to="https://superlabs.co/it-services">
                    IT SERVICES
                    </NavLink>
                  </h4>
                  <ul className="space-y-1 grid grid-cols-3 gap-x-5 pt-5">
                    <div className="space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/cloud-infrastructure.php">Cloud Infrastructure</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/manchine-learning.php">Machine Learning</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/enterprise-technology.php">Enterprise Technology</NavLink>
                      </li>
                    </div>
                    <div className="space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/payments.php">Payments</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/security.php">Security</NavLink>
                      </li>
                    </div>
                    <div className="space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/blockchainenterprise.php">Blockchain</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/application-development.php ">Application Development</NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="">
                  <h4 className="text-sm font-bold text-red-500">
                    <NavLink target="_blank" to="https://superlabs.co/engineering-services">
                    ENGINEERING SERVICES
                    </NavLink>
                  </h4>
                  <ul className="space-y-1 grid grid-cols-3 gap-x-5 pt-5">
                    <div className="w-[200px] space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/industrial-products.php">Industrial Products</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/machine-design.php">Machine Design</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/special-devices.php">Special Devices</NavLink>
                      </li>
                    </div>
                    <div className="w-[160px] space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/technical.php">Technical Documentation</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/concept-visualizing.php">Concept Visualizing</NavLink>
                      </li>
                      
                    </div>
                    <div className="w-[200px] space-y-3">
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/mechanical-engineeing-prototyping.php">Prototyping</NavLink>
                      </li>
                      <li className="text-gray-600 hover:text-red-500">
                        <NavLink target="_blank" to="https://superlabs.co/research-and-development.php">Research & Development</NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="">
                  <h4 className="text-sm font-bold text-red-500">
                    DESIGN
                  </h4>
                  <ul className="space-y-3 grid grid-cols-1 pt-5">
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/visual-identity-design">Visual Identity</NavLink>
                    </li>
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/ux-and-ui-design.php">UX & UI</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        <li className="relative cursor-pointer">
          <NavLink target="_blank"
              to="https://superlabs.co/strategy.php"
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                setIsStrategyOpen(!isStrategyOpen);
                
              }}
          >
            Strategy
            <RiArrowDropDownFill className="inline-block ml-1 text-red-500 size-6" />
          </NavLink>
          {isStrategyOpen && (
            <div
              className="absolute z-50 -left-16 w-60 mt-12 bg-white shadow-md rounded-lg py-3 px-4"
            >
              <div className="mb-3 relative">
                <span
                  className="text-sm font-bold text-gray-700 cursor-pointer hover:text-red-500"
                  onClick={() => setOpenSubMenu(openSubMenu === 'Operations' ? null : 'Operations')}
                >
                  Operations
                  <RiArrowDropDownFill className="inline-block ml-1 text-red-500 size-5" />
                </span>
                {openSubMenu === 'Operations' && (
                  <ul
                    className="mt-2 space-y-1 absolute text-sm -left-56 w-48 top-0 bg-white shadow-md rounded-lg py-3 px-4"
                  >
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/data-strategy.php">Data Strategy</NavLink>
                    </li>
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/organizational-design.php">Organizational Design</NavLink>
                    </li>
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/price-modeling.php">Price Modeling</NavLink>
                    </li>
                  </ul>
                )}
              </div>
              <div className="mb-3 relative">
                <span
                  className="text-sm font-bold text-gray-700 cursor-pointer hover:text-red-500"
                  onClick={() => setOpenSubMenu(openSubMenu === 'Business' ? null : 'Business')}
                >
                  Business
                  <RiArrowDropDownFill className="inline-block ml-1 text-red-500 size-5" />
                </span>
                {openSubMenu === 'Business' && (
                  <ul
                    className="mt-2 space-y-1 absolute text-sm -left-40 top-0 bg-white shadow-md rounded-lg py-3 px-4"
                  >
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/new-digital.php">New Ventures</NavLink>
                    </li>
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/cost-reduction.php">Cost Reduction</NavLink>
                    </li>
                  </ul>
                )}
              </div>
              <div className="mb-3 relative">
                <span
                  className="text-sm font-bold text-gray-700 cursor-pointer hover:text-red-500"
                  onClick={() => setOpenSubMenu(openSubMenu === 'Transformation' ? null : 'Transformation')}
                >
                  Transformation
                  <RiArrowDropDownFill className="inline-block ml-1 text-red-500 size-5" />
                </span>
                {openSubMenu === 'Transformation' && (
                  <ul
                    className="mt-2 space-y-1 absolute text-sm -left-56 top-0 bg-white shadow-md rounded-lg py-3 px-4"
                  >
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/change-implementation.php">Change Implementation</NavLink>
                    </li>
                    <li className="text-gray-600 hover:text-red-500">
                      <NavLink target="_blank" to="https://superlabs.co/product-and-experience.php">Product Innovation</NavLink>
                    </li>
                  </ul>
                )}
              </div>
              <div className="mb-3 relative">
                <span className="text-sm font-bold text-gray-700 cursor-pointer hover:text-red-500">
                  <NavLink target="_blank" to="https://superlabs.co/intellectual-property">
                  Intellectual Property
                  </NavLink>
                </span>
              </div>
            </div>
          )}
        </li>
        <li>
          <NavLink target="_blank" to="/careers" className="hover:text-red-500">
            Careers
          </NavLink>
        </li>
      </ul>
      <div className="lg:hidden">
        <button className="text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar for mobile devices */}
      <div
        className={`fixed z-50 inset-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-gray-900 bg-opacity-75 lg:hidden transition-transform duration-300 ease-in-out`}
      >
        <div className="bg-black bg-opacity-100 overflow-y-auto w-64 h-full shadow-lg py-4 px-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <img src={logo} alt="superlabs-logo" className="w-32 h-auto" />
              <button className="text-white focus:outline-none" onClick={toggleMenu}>
                <FiX size={24} />
              </button>
            </div>
            <ul className="text-gray-300">
  <li className="py-2">
    <NavLink target="_blank" to="https://superlabs.co/featured" className="hover:text-red-500" onClick={toggleMenu}>
      Work
    </NavLink>
  </li>
  <li className="py-2">
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={() => setIsSidebarServicesOpen(!isSidebarServicesOpen)}
    >
      <span>
        <NavLink target="_blank" to="https://superlabs.co/services">
        Services
        </NavLink>
      </span>
      <RiArrowDropDownFill className="ml-1 text-red-500" />
    </div>
    {isSidebarServicesOpen && (
      <div className="mt-2 pl-4 space-y-2">
        <div>
          <h4 className="text-sm font-bold text-red-500">
                    <NavLink target="_blank" to="https://superlabs.co/resource-augmentation.php">
                      RESOURCE AUGMENTATION
                    </NavLink>
          </h4>
          <ul className="mt-1 space-y-1">
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/dotnet-developer.php" onClick={toggleMenu}>Dot Net Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/full-stack-developer.php" onClick={toggleMenu}>Full Stack Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/web-developer.php" onClick={toggleMenu}>Web Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/angularjs-developer.php" onClick={toggleMenu}>AngularJS Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/ios-developer.php" onClick={toggleMenu}>iOS Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/android-developer.php" onClick={toggleMenu}>Android Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/java-developer.php" onClick={toggleMenu}>Java Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/flutter-developer.php" onClick={toggleMenu}>Flutter Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/nodejs-developer.php" onClick={toggleMenu}>NodeJS Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/javascript-developer.php" onClick={toggleMenu}>JavaScript Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/app-developer.php" onClick={toggleMenu}>App Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/machine-learning-developer.php" onClick={toggleMenu}>Machine Learning Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/back-end-developer.php/backend-developer" onClick={toggleMenu}>Back End Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/front-end-developer.php" onClick={toggleMenu}>Front End Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/quality-assurance-specialist.php" onClick={toggleMenu}>Quality Assurance Developer</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/security-engineers.php" onClick={toggleMenu}>Security Engineers</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-red-500">
                    <NavLink target="_blank" to="https://superlabs.co/it-services">
                      IT SERVICES
                    </NavLink>
          </h4>
          <ul className="mt-1 space-y-1">
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/cloud-infrastructure.php" onClick={toggleMenu}>Cloud Infrastructure</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/payments.php" onClick={toggleMenu}>Payments</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/manchine-learning.php" onClick={toggleMenu}>Machine Learning</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/security.php" onClick={toggleMenu}>Security</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/enterprise-technology.php" onClick={toggleMenu}>Enterprise Technology</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/blockchainenterprise.php" onClick={toggleMenu}>Blockchain</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/application-development.php" onClick={toggleMenu}>Application Development</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-red-500">
          <NavLink target="_blank" to="https://superlabs.co/engineering-services">
                      ENGINEERING SERVICES
                    </NavLink>
          </h4>
          <ul className="mt-1 space-y-1">
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/industrial-products.php" onClick={toggleMenu}>Industrial Products</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/technical.php" onClick={toggleMenu}>Technical Documentation</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/machine-design.php" onClick={toggleMenu}>Machine Design</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/mechanical-engineeing-prototyping.php" onClick={toggleMenu}>Prototyping</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/special-devices.php" onClick={toggleMenu}>Special Devices</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="/research-development" onClick={toggleMenu}>Research & Development</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/concept-visualizing.php" onClick={toggleMenu}>Concept Visualizing</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/mechanical-engineeing-prototyping.php" onClick={toggleMenu}>Mechanical Engineering</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-red-500">
            DESIGN
          </h4>
          <ul className="mt-1 space-y-1">
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/visual-identity-design" onClick={toggleMenu}>Visual Identity</NavLink>
            </li>
            <li className="text-gray-400 hover:text-red-500">
              <NavLink target="_blank" to="https://superlabs.co/ux-and-ui-design.php" onClick={toggleMenu}>UX & UI</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )}
  </li>
  <li className="py-2">
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={() => setIsSidebarStrategyOpen(!isSidebarStrategyOpen)}
    >
      <span>
        <NavLink target="_blank" to="https://superlabs.co/strategy.php">
        Strategy
        </NavLink>
      </span>
      <RiArrowDropDownFill className="ml-1 text-red-500" />
    </div>
    {isSidebarStrategyOpen && (
      <div className="mt-2 pl-4 space-y-2">
        <div>
          <span
            className="text-sm flex justify-between font-bold text-gray-400 cursor-pointer hover:text-red-500"
            onClick={() =>
              setOpenSidebarSubMenu(
                openSidebarSubMenu === 'Operations' ? null : 'Operations'
              )
            }
          >
            Operations
            <RiArrowDropDownFill className="ml-1 text-red-500" />
          </span>
          {openSidebarSubMenu === 'Operations' && (
            <ul className="mt-2 ml-5 space-y-1">
              <li className="text-gray-400 hover:text-red-500">
                <NavLink target="_blank" to="https://superlabs.co/data-strategy.php" onClick={toggleMenu}>Data Strategy</NavLink>
              </li>
              <li className="text-gray-400 hover:text-red-500">
                <NavLink target="_blank" to="https://superlabs.co/organizational-design.php" onClick={toggleMenu}>Organizational Design</NavLink>
              </li>
              <li className="text-gray-400 hover:text-red-500">
                <NavLink target="_blank" to="https://superlabs.co/price-modeling.php" onClick={toggleMenu}>Price Modeling</NavLink>
              </li>
            </ul>
          )}
        </div>
        <div>
          <span
            className="text-sm flex justify-between font-bold text-gray-400 cursor-pointer hover:text-red-500"
            onClick={() =>
              setOpenSidebarSubMenu(
                openSidebarSubMenu === 'Business' ? null : 'Business'
              )
            }
          >
            Business
            <RiArrowDropDownFill className="ml-1 text-red-500" />
          </span>
          {openSidebarSubMenu === 'Business' && (
            <ul className="mt-2 ml-5 space-y-1">
              <li className="text-gray-400 hover:text-red-500">
                <NavLink target="_blank" to="https://superlabs.co/new-digital.php" onClick={toggleMenu}>New Ventures</NavLink>
              </li>
              <li className="text-gray-400 hover:text-red-500">
                <NavLink target="_blank" to="https://superlabs.co/new-digital.php" onClick={toggleMenu}>Cost Reduction</NavLink>
              </li>
            </ul>
          )}
        </div>
        <div>
          <span
            className="text-sm flex justify-between font-bold text-gray-400 cursor-pointer hover:text-red-500"
            onClick={() =>
              setOpenSidebarSubMenu(
                openSidebarSubMenu === 'Transformation' ? null : 'Transformation'
              )
            }
          >
            Transformation
            <RiArrowDropDownFill className="ml-1 text-red-500" />
          </span>
          {openSidebarSubMenu === 'Transformation' && (
            <ul className="mt-2 space-y-1 ml-5">
              <li className="text-gray-400 hover:text-red-500">
                <NavLink target="_blank" to="https://superlabs.co/change-implementation.php" onClick={toggleMenu}>Change Implementation</NavLink>
              </li>
              <li className="text-gray-400 hover:text-red-500">
                <NavLink target="_blank" to="https://superlabs.co/product-and-experience.php" onClick={toggleMenu}>Product Innovation</NavLink>
              </li>
            </ul>
          )}
        </div>
        <div>
          <span
            className="text-sm font-bold text-gray-400 cursor-pointer hover:text-red-500"
            onClick={() =>
              setOpenSidebarSubMenu(
                openSidebarSubMenu === 'Intellectual Property' ? null : 'Intellectual Property'
              )
            }
          >
             <NavLink target="_blank" to="https://superlabs.co/intellectual-property">
                    Intellectual Property
            </NavLink>
          </span>
        </div>
      </div>
    )}
  </li>
  <li className="py-2">
    <NavLink target="_blank" to="/careers" className="hover:text-red-500" onClick={toggleMenu}>
      Careers
    </NavLink>
  </li>
</ul>
                </div>
                </div>
                </div>
                </nav>
                );
                };
export default Navbar;