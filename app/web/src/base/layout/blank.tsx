import { layout } from 'web-init'
import { useGlobal } from '../../../../../pkgs/web/init/node_modules/web-utils/src'
import { globalLayout } from '../global/layout'
// import Footer from '../../components/Footer'

export default layout({
  component: ({ children }) => {
    const meta = useGlobal(globalLayout)

    return (
      <div>
        <div className="flex bg-blue-500 gap-2 p-2 cursor-pointer">
          {meta.menu.map((el, i) => {
            return (
              <div key={i} onClick={() => navigate(el.url)}>
                {el.title}
              </div>
            )
          })}
        </div>
        <div>{children}</div>
{/* 
        <Footer /> */}
      </div>
    )
  },
})
