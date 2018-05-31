const handpickCourse=[
  {
    id: 1,
    name: 'weblogic wls 漏洞训练',
    src: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1316246064,2355491040&fm=85&s=400A5D320F61548280F94BEA0300A036',
    desc: 'Weblogic被认为是市场上最好用的J2EE工具之一，其在开发和部署上具有很多的特色和优势',
    followerNum: '112',
    rateVal: 5 
  },
  {
    id: 2,
    name: 'SQL注入漏洞模拟训练攻击训练',
    src: 'https://dn-simplecloud.shiyanlou.com/1501565731189.png',
    desc: 'sqli-labs是一个专业的SQL注入练习平台，它支持GET和POST两种类型的注入方式，其中包含：1.报错注入(联合查询)1)字符型 2)数字型 2.报错注入(基于二次注入) 3.盲注1)基于布尔值2)基于时间 4.UPDATE型注入练习 5.INSERT型注入练 6. HTTP头部注入1)基于Referer2)基于UserAgent3)基于Cookie 7. 二次排序注入练习',
    followerNum: '10',
    rateVal: 2.5
  },
  {
    id: 3,
    name: '海洋CMS远程命令执行漏洞模拟攻击训练',
    src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2044728396,485030364&fm=58&s=A942C614CF44FA130EE61CD2030010B8&bpow=121&bpoh=75',
    desc: '海洋CMS因其便捷性和广泛性，收到很多站点的青睐，很多站长在建站时都会选择海洋CMS，但是海洋CMS的远程命令执行漏洞却使很多站点收到了攻击',
    followerNum: '10000'
  },
  {
    id: 4,
    name: 'wordpress 4.6 远程代码执行漏洞复现',
    src: 'http://image.3001.net/images/20150428/14301909064990.jpg!small',
    desc: '漏洞出现在wordpress的留言处，不过问题是由mysql的一个特性引起的。在mysql的utf8字符集中，一个字符由1~3个字节组成，对于大于3个字节的字符，mysql使用了utf8mb4的形式来存储。如果我们将一个utf8mb4字符插入到utf8编码的列中，那么在mysql的非strict mode下，他的做法是将后面的内容截断。',
    followerNum: '10',
    rateVal: 2.5
  },
  {
    id: 5,
    name: 'Jekins漏洞模拟攻击训练',
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526290189760&di=33a07701967f15cf1374e7f6f29b452f&imgtype=0&src=http%3A%2F%2Fimg3.dns4.cn%2Fpic%2F192713%2Fp18%2F20171214154800_8834_zs_sy.jpeg',
    desc: '该漏洞存在于使用HTTP协议的双向通信通道的具体实现代码中，Jenkins利用此通道来接收命令，恶意访问者可以构造恶意参数远程执行命令，从而获取系统权限，造成数据泄露',
    followerNum: '10',
    rateVal: 2.5
  },
  {
    id: 6,
    name: 'jboss 5.1漏洞利用过程',
    src: 'http://img4.imgtn.bdimg.com/it/u=4258902502,3573184018&fm=27&gp=0.jpg',
    desc: '该漏洞的出现的根源在CommonsCollections组件中对于集合的操作存在可以进行反射调用的方法,并且该方法在相关对象反序列化时并未进行任何校验，导致远程代码执行。',
    followerNum: '10',
    rateVal: 2.5
  },
  {
    id: 7,
    name: 'Struts2 S2-048漏洞模拟攻击训练',
    src: 'https://www.w3cschool.cn/attachments/image/20161214/1481678654127827.jpg',
    desc: 'Apache Struts2的Jakarta Multipart parser插件存在远程代码执行漏洞，漏洞编号为CNNVD-201703-152。攻击者可以在使用该插件上传文件时，修改HTTP请求头中的Content-Type值来触发该漏洞，导致远程执行代码。',
    followerNum: '10',
    rateVal: 2.5
  },
  {
    id: 8,
    name: '帝国CMS漏洞模拟攻击训练',
    src: 'https://dn-simplecloud.shiyanlou.com/1504058636447.png',
    desc: '帝国CMS因为开源，所以受到很多人的喜爱，但是其版本漏洞可后台直接getshell，导致很多帝国CMS站点被攻击',
    followerNum: '10',
    rateVal: 2.5
  }
];
const courses=[
  {
    id: 1,
    name: 'weblogic wls 漏洞训练',
    src: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1316246064,2355491040&fm=85&s=400A5D320F61548280F94BEA0300A036',
    desc: 'Weblogic被认为是市场上最好用的J2EE工具之一，其在开发和部署上具有很多的特色和优势',
    followerNum: '112',
    rateVal: 5,
    textLink: 'http://doc.always-online.club/detail/01.html'
  },
  {
    id: 2,
    name: 'SQL注入漏洞模拟训练攻击训练',
    src: 'https://dn-simplecloud.shiyanlou.com/1501565731189.png',
    desc: 'sqli-labs是一个专业的SQL注入练习平台，它支持GET和POST两种类型的注入方式，其中包含：1.报错注入(联合查询)1)字符型 2)数字型 2.报错注入(基于二次注入) 3.盲注1)基于布尔值2)基于时间 4.UPDATE型注入练习 5.INSERT型注入练 6. HTTP头部注入1)基于Referer2)基于UserAgent3)基于Cookie 7. 二次排序注入练习',
    followerNum: '10',
    rateVal: 2.5,
    textLink: 'http://doc.always-online.club/detail/02.html'    
  },
  {
    id: 3,
    name: '海洋CMS远程命令执行漏洞模拟攻击训练',
    src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2044728396,485030364&fm=58&s=A942C614CF44FA130EE61CD2030010B8&bpow=121&bpoh=75',
    desc: '海洋CMS因其便捷性和广泛性，收到很多站点的青睐，很多站长在建站时都会选择海洋CMS，但是海洋CMS的远程命令执行漏洞却使很多站点收到了攻击',
    followerNum: '10000',
    rateVal: 2.5,
    textLink: 'http://doc.always-online.club/detail/03.html'    
    
  },
  {
    id: 4,
    name: 'wordpress 4.6 远程代码执行漏洞复现',
    src: 'http://image.3001.net/images/20150428/14301909064990.jpg!small',
    desc: '漏洞出现在wordpress的留言处，不过问题是由mysql的一个特性引起的。在mysql的utf8字符集中，一个字符由1~3个字节组成，对于大于3个字节的字符，mysql使用了utf8mb4的形式来存储。如果我们将一个utf8mb4字符插入到utf8编码的列中，那么在mysql的非strict mode下，他的做法是将后面的内容截断。',
    followerNum: '10',
    rateVal: 2.5,
    textLink: 'http://doc.always-online.club/detail/04.html'    
  },
  {
    id: 5,
    name: 'Jekins漏洞模拟攻击训练',
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526290189760&di=33a07701967f15cf1374e7f6f29b452f&imgtype=0&src=http%3A%2F%2Fimg3.dns4.cn%2Fpic%2F192713%2Fp18%2F20171214154800_8834_zs_sy.jpeg',
    desc: '该漏洞存在于使用HTTP协议的双向通信通道的具体实现代码中，Jenkins利用此通道来接收命令，恶意访问者可以构造恶意参数远程执行命令，从而获取系统权限，造成数据泄露',
    followerNum: '10',
    rateVal: 2.5,
    textLink: 'http://doc.always-online.club/detail/05.html'    
  },
  {
    id: 6,
    name: 'jboss 5.1漏洞利用过程',
    src: 'http://img4.imgtn.bdimg.com/it/u=4258902502,3573184018&fm=27&gp=0.jpg',
    desc: '该漏洞的出现的根源在CommonsCollections组件中对于集合的操作存在可以进行反射调用的方法,并且该方法在相关对象反序列化时并未进行任何校验，导致远程代码执行。',
    followerNum: '10',
    rateVal: 2.5,
    textLink: 'http://doc.always-online.club/detail/06.html'    
    
  },
  {
    id: 7,
    name: 'Struts2 S2-048漏洞模拟攻击训练',
    src: 'https://www.w3cschool.cn/attachments/image/20161214/1481678654127827.jpg',
    desc: 'Apache Struts2的Jakarta Multipart parser插件存在远程代码执行漏洞，漏洞编号为CNNVD-201703-152。攻击者可以在使用该插件上传文件时，修改HTTP请求头中的Content-Type值来触发该漏洞，导致远程执行代码。',
    followerNum: '10',
    rateVal: 2.5,
    textLink: 'http://doc.always-online.club/detail/07.html'        
  },
  {
    id: 8,
    name: '帝国CMS漏洞模拟攻击训练',
    src: 'https://dn-simplecloud.shiyanlou.com/1504058636447.png',
    desc: '帝国CMS因为开源，所以受到很多人的喜爱，但是其版本漏洞可后台直接getshell，导致很多帝国CMS站点被攻击',
    followerNum: '10',
    rateVal: 2.5,
    textLink: 'http://doc.always-online.club/detail/08.html'        
  },
  
  // {
  //   id: 12,
  //   name: '流量分析训练',
  //   src: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=862650852,2359989218&fm=85&s=F198C5393AFF5E82757071CE0300E0B3',
  //   desc: '面对大量的流量日志，从中牵出蛛丝马迹，也是一种很好玩的东西。',
  //   followerNum: '25',
  //   rateVal: 2.5 
  // },
  // {
  //   id: 13,
  //   name: 'PHP LFI漏洞模拟攻击训练',
  //   src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=671168294,1954101466&fm=27&gp=0.jpg',
  //   desc: '本地文件包含漏洞需要和精心构造的文件结合起来，才能发挥最大威力。这些精心构造的文件包括用户上传的文件、服务器产生的日志、session文件以及PHP程序创建的临时文件等等。尽管可以包含的文件有很多类型，但是也击中了本地文件包含的痛点–无法准确获取文件位置及文件名，只能通过猜测路径、文件名进行漏洞利用，这无疑增加了漏洞的利用难度。',
  //   followerNum: '10',
  //   rateVal: 2.5
  // },
  // {
  //   id: 9,
  //   name: '海洋CMS远程命令执行漏洞模拟攻击训练',
  //   src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2044728396,485030364&fm=58&s=A942C614CF44FA130EE61CD2030010B8&bpow=121&bpoh=75',
  //   desc: '海洋CMS因其便捷性和广泛性，收到很多站点的青睐，很多站长在建站时都会选择海洋CMS，但是海洋CMS的远程命令执行漏洞却使很多站点收到了攻击',
  //   followerNum: '10000'
  // },
  // {
  //   id: 10,
  //   name: '隐写术破解训练',
  //   src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1365993520,1890829297&fm=85&s=AB8BF3075A23749C4A8443A003003026',
  //   desc: '隐写术是关于信息隐藏，即不让计划的接收者之外的任何人知道信息的传递事件（而不只是信息的内容）的一门技巧与科学',
  //   followerNum: '123' 
  // },
];

const learnPath=[
  {
    id: 1,
    name: '新手入门',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741005890.png',
    desc: '6门课程'
  },
  {
    id: 2,
    name: '进阶课程',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741028787.png',
    desc: '6门课程'
  },
  {
    id: 3,
    name: '高阶课程',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741070013.png',
    desc: '6门课程'
  },
  {
    id: 4,
    name: '成为大牛',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741227106.png',
    desc: '6门课程'
  },
];
const paths=[
  {
    id: 1,
    name: '新手入门',
    href: 'first-step',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741005890.png',    
    desc: '6门课程'
  },
  {
    id: 2,
    name: '进阶课程',
    href: 'second-step',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741028787.png',    
    desc: '6门课程'
  },
  {
    id: 3,
    name: '高阶课程',
    href: 'third-step',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741070013.png',    
    desc: '6门课程'
  },
  {
    id: 4,
    name: '成为大牛',
    href: 'last-step',
    src: 'https://dn-simplecloud.shiyanlou.com/1487741227106.png',    
    desc: '6门课程'
  },
];
const questions =[
  {
    id: 1,
    avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    title: 'tomacat8启动异常',
    author: 'cherrynia',
    date: '2018-04-27 17:06',
    startCount: 8,  
    answerCount: 10
  },
  {
    id: 2,
    avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    title: 'tomacat8启动异常',
    author: 'cherrynia',
    date: '2018-04-27 17:06',
    startCount: 8,  
    answerCount: 10
  },
  {
    id: 3,
    avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    title: 'tomacat8启动异常',
    author: 'cherrynia',
    date: '2018-04-27 17:06',
    startCount: 8,  
    answerCount: 10
  },
  {
    id: 4,
    avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    title: 'tomacat8启动异常',
    author: 'cherrynia',
    date: '2018-04-27 17:06',
    startCount: 8,  
    answerCount: 10
  }, 
  {
    id: 5,
    avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    title: 'tomacat8启动异常',
    author: 'cherrynia',
    date: '2018-04-27 17:06',
    startCount: 8,  
    answerCount: 10
  },
  {
    id: 6,
    avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    title: 'tomacat8启动异常',
    author: 'cherrynia',
    date: '2018-04-27 17:06',
    startCount: 8,
    answerCount: 10
  }
];
export { handpickCourse, courses, learnPath, paths, questions };