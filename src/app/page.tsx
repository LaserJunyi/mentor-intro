'use client'

import Image from 'next/image'

const mentors = [
  {
    id: 1,
    name: '杨帆',
    image: '/mentors/image1.jpg',
    title: '高级技师 · 全国技术能手',
    highlights: ['四川工匠', '四川省技术能手', '国家职业资格健身教练指导师级', '国家体育总局培训师/考评员'],
    experience: '全国职业技能大赛第五名 | 省级大赛一等奖'
  },
  {
    id: 2,
    name: '李武',
    image: '/mentors/image2.jpg',
    title: '国家级培训师/考评员',
    highlights: ['国家体育总局健身教练培训师', '国家职业资格滑雪教练', '全国卡巴迪运动教练员/裁判员'],
    experience: '2019年深圳市十佳健身教练 | 全国课程设计冠军'
  },
  {
    id: 3,
    name: '李文',
    image: '/mentors/image3.jpg',
    title: '从业12年资深导师',
    highlights: ['绵阳市体美运动康复工作室创始人', '产后恢复·黄金指南课程研发者', '专攻：产后修复 | 青少年体能 | 精准康复'],
    experience: '丰富一线授课经验 | 省级技能大赛执裁'
  },
  {
    id: 4,
    name: '张恒君',
    image: '/mentors/image4.jpg',
    title: '副教授',
    highlights: ['全国体育行业职业技能大赛四川省冠军', '美国体能协会NSCA-CSCS体能训练师', '国家职业资格健身教练培训师/考评员', '专攻：青少儿体能 | 运动营养'],
    experience: '多所高校特聘专家 | 全国大赛二等奖'
  },
  {
    id: 5,
    name: '付尚友',
    image: '/mentors/image5.jpg',
    title: '15年行业经验 · 10000+指导时长',
    highlights: ['ACE美国运动委员会讲师', 'TRX中国区培训导师', 'NASM矫正运动专家CES', 'NASM运动表现提升专家PES'],
    experience: '奥力来健身学院培训导师 | 多项国际认证'
  },
  {
    id: 6,
    name: '刘迪',
    image: '/mentors/image6.jpg',
    title: '健身教练职业能力测评考评员',
    highlights: ['塑刻运动，联合创始人', '训练系统开发项目负责人', '健身教练职业能力测评培训师'],
    experience: '百万业绩私教经理 | 安全授课1.7万节'
  },
  {
    id: 7,
    name: '张钧奕',
    image: '/mentors/image7.jpg',
    title: '四川省体育行业竞赛冠军',
    highlights: ['特种体能培训师', 'CFSC功能性力量教练', '健身教练职业能力'],
    experience: '运动抗衰体系创始人|体育科技公司创始人'
]

function MentorCard({ mentor }: { mentor: typeof mentors[0] }) {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      marginBottom: '24px',
      border: '1px solid rgba(255,255,255,0.8)'
    }}>
      <div style={{ position: 'relative', width: '100%', height: '280px' }}>
        <Image src={mentor.image} alt={mentor.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority={mentor.id === 1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }} />
      </div>
      <div style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px', letterSpacing: '2px' }}>{mentor.name}</h2>
        <p style={{ fontSize: '16px', color: '#e63946', fontWeight: '600', marginBottom: '20px', lineHeight: '1.4' }}>{mentor.title}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {mentor.highlights.map((item, index) => (
            <span key={index} style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', padding: '8px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500', display: 'inline-block', boxShadow: '0 2px 8px rgba(102,126,234,0.3)' }}>{item}</span>
          ))}
        </div>
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '16px', borderLeft: '4px solid #667eea' }}>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>🏆 {mentor.experience}</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f0f4ff 0%, #fff5f5 50%, #f0fff4 100%)' }}>
      <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', padding: '40px 20px 50px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(230,57,70,0.3), transparent)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(102,126,234,0.3), transparent)', borderRadius: '50%' }} />
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '12px', position: 'relative', zIndex: 1, letterSpacing: '4px' }}>川跃维度</h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', fontWeight: '300', position: 'relative', zIndex: 1, letterSpacing: '2px' }}>专业导师团队</p>
        <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #e63946, #f77f00)', margin: '16px auto 0', borderRadius: '2px' }} />
      </div>
      <div style={{ padding: '24px 16px 40px', maxWidth: '480px', margin: '0 auto' }}>
        {mentors.map((mentor) => <MentorCard key={mentor.id} mentor={mentor} />)}
      </div>
      <div style={{ background: '#1a1a2e', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '8px' }}>专业 · 专注 · 专心</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>川跃维度健身培训</p>
      </div>
    </main>
  )
}




