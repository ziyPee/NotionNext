import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer (props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer className="relative w-full bg-black px-6 border-t">
        <div className="text-yellow-300 container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
            <div className='text-center'> &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights reserved.</div>
            <div className="md:p-0 text-center md:text-right text-xs">
                {/* 右侧链接 */}
                {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
                {siteConfig('ICP_BEI_AN') && (<a href="https://beian.miit.gov.cn/">{siteConfig('ICP_BEI_AN')} </a>)}
                {siteConfig('POLICE_BEI_AN') && (<span>&nbsp;&amp;&nbsp;</span>) && (<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502006751">{siteConfig('POLICE_BEI_AN')}</a>)}
            </div>
        </div>
    </footer>
}
