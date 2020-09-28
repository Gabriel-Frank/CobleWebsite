import main from './components/pages/landing'
import blog from './components/pages/blog'
import data from './components/pages/userData'
import signIn from './components/pages/signUp'
 
export default[
    {path: '/', component: main},
    {path: '/blog', component: blog},
    {path: '/data', component: data},
    {path: '/sign_in', component: signIn}
]