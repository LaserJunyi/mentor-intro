'use client'

import Image from 'next/image'
import { useState } from 'react'

const mentors = [
  {
    id: 1,
    name: '杨帆',
    image: '/mentors/image1.jpg',
    title: '高级技师 · 全国技术能手',
    highlights: ['四川工匠', '四川省技术能手', '国家职业资格健身教练指导师级', '国家体育总局培训师/考评员'],
    experience: '全国职业技能大赛第五名 | 省级大赛一等奖',
    details: {
      specialty: ['健身教练职业技能培训', '体能训练指导', '运动营养规划', '拳击训练'],
      achievements: [
        { year: '2020', title: '四川省工匠杯职业技能大赛第一名' },
        { year: '2018', title: '四川省健身教练职业技能大赛一等奖' },
        { year: '2020', title: '第一届中华人民共和国职业技能大赛第五名' }
      ],
      certifications: ['高级技师', '全国技术能手', '四川省技术能手', '四川工匠', 'WBBU世界拳击好友联盟成都区副主席', 'WBA世界拳击协会教练员']
    }
  },
  {
    id: 2,
    name: '付尚友',
    image: '/mentors/image5.jpg',
    title: '15年行业经验 · 10000+指导时长',
    highlights: ['ACE美国运动委员会讲师', 'TRX中国区培训导师', 'NASM矫正运动专家CES', 'NASM运动表现提升专家PES'],
    experience: '奥力来健身学院培训导师 | 多项国际认证',
    details: {
      specialty: ['儿童青少年体能训练', '成人功能性训练', '运动康复矫正', 'TRX悬吊训练'],
      achievements: [
        { year: '15年', title: '运动健身行业从业经验' },
        { year: '10000+', title: '累计指导训练时长' }
      ],
      certifications: ['ACE美国运动委员会认证教练', 'NSCA-CPT美国体能协会认证教练', 'NASM矫正运动专家CES', 'NASM运动表现提升专家PES', '高级公共营养师']
    }
  },
  {
    id: 3,
    name: '张钧奕',
    image: '/mentors/image7.jpg',
    title: '四川省体育行业竞赛冠军',
    highlights: ['特种体能培训师', 'CFSC功能性力量教练', '健身教练职业能力'],
    experience: '运动抗衰体系创始人 | 体育科技公司创始人',
    details: {
      specialty: ['特种体能训练', '功能性力量训练', '运动抗衰体系', '体能系统开发'],
      achievements: [
        { year: '', title: '四川省体育行业竞赛冠军' },
        { year: '', title: '运动抗衰体系创始人' },
        { year: '', title: '体育科技公司创始人' }
      ],
      certifications: ['特种体能培训师', 'CFSC功能性力量教练', '健身教练职业能力测评培训师']
    }
  },
  {
    id: 4,
    name: '张恒君',
    image: '/mentors/image4.jpg',
    title: '副教授',
    highlights: ['全国体育行业职业技能大赛四川省冠军', '美国体能协会NSCA-CSCS体能训练师', '国家职业资格健身教练培训师/考评员', '专攻：青少儿体能 | 运动营养'],
    experience: '多所高校特聘专家 | 全国大赛二等奖',
    details: {
      specialty: ['青少儿体能及体适能训练', '健身教练职业培养', '专业竞技体育体能训练', '运动营养指导'],
      achievements: [
        { year: '', title: '全国体育行业职业技能大赛四川省首届冠军' },
        { year: '', title: '全国体育行业职业技能大赛第六名' },
        { year: '', title: '全国职业技能大赛（工匠杯）四川省第二名' }
      ],
      certifications: ['副教授', '成都体育学院院级优秀毕业生', '国家运动营养职业能力课程培训师', '美国体能协会NSCA-CSCS体能训练师', 'KTTAPE运动机能贴扎培训师']
    }
  },
  {
    id: 5,
    name: '李文',
    image: '/mentors/image3.jpg',
    title: '从业12年资深导师',
    highlights: ['绵阳市体美运动康复工作室创始人', '产后恢复·黄金指南课程研发者', '专攻：产后修复 | 青少年体能 | 精准康复'],
    experience: '丰富一线授课经验 | 省级技能大赛执裁',
    details: {
      specialty: ['产后修复', '青少年体能训练', '精准康复', '运动康复指导'],
      achievements: [
        { year: '12年', title: '丰富的一线授课经验' },
        { year: '', title: '产后恢复·黄金指南课程研发者' },
        { year: '', title: '常年参与省级技能大赛执裁工作' }
      ],
      certifications: ['国家体育总局健身教练职业能力测评培训师/考评员', '国家体育总局青少年体能职业能力测评培训师/考评员', '绵阳市体美运动康复工作室创始人']
    }
  },
  {
    id: 6,
    name: '刘迪',
    image: '/mentors/image6.jpg',
    title: '健身教练职业能力测评考评员',
    highlights: ['塑刻运动，联合创始人', '训练系统开发项目负责人', '健身教练职业能力测评培训师'],
    experience: '百万业绩私教经理 | 安全授课1.7万节',
    details: {
      specialty: ['健身教练职业能力培训', '私教管理', '训练系统开发', '业绩提升指导'],
      achievements: [
        { year: '', title: '百万业绩私教经理' },
        { year: '1.7万', title: '安全授课节数' }
      ],
      certifications: ['健身教练职业能力测评考评员', '塑刻运动联合创始人', '训练系统开发项目负责人']
    }
  },
  {
    id: 7,
    name: '李武',
    image: '/mentors/image2.jpg',
    title: '国家级培训师/考评员',
    highlights: ['国家体育总局健身教练培训师', '国家职业资格滑雪教练', '全国卡巴迪运动教练员/裁判员'],
    experience: '2019年深圳市十佳健身教练 | 全国课程设计冠军',
    details: {
      specialty: ['健身教练培训', '滑雪教练培训', '卡巴迪运动', '课程设计'],
      achievements: [
        { year: '2024', title: 'I-FIT全国课程设计和展示冠军' },
        { year: '2019', title: '深圳市"十佳健身教练"' },
        { year: '2018', title: '四川省健身教练职业技能大赛第一名' }
      ],
      certifications: ['国家体育总局健身教练职业能力培训师/考评员', '国家体育总局青少年体能训练职业能力培训师/考评员', '国家职业资格滑雪教练', '全国卡巴迪运动教练员/裁判员']
    }
  }
]

function MentorCard({ mentor, isExpanded, onToggle }: { mentor: typeof mentors[0]; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div onClick={onToggle} style={{ background: 'linear-gradient(145deg, #ffffff, #f8fafc)', borderRadius: '24px', overflow: 'hidden', boxShadow: isExpanded ? '0 8px 30px rgba(102,126,234,0.25)' : '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '24px', border: isExpanded ? '2px solid #667eea' : '1px solid rgba(255,255,255,0.8)', cursor: 'pointer', transition: 'all 0.3s ease', transform: isExpanded ? 'scale(1.01)' : 'scale(1)' }}>
      <div style={{ position: 'relative', width: '100%', height: '280px' }}>
        <Image src={mentor.image} alt={mentor.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority={mentor.id === 1} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }} />
        <div style={{ position: 'absolute', bottom: '10px', right: '15px', color: 'white', fontSize: '12px', opacity: 0.9, background: 'rgba(0,0,0,0.4)', padding: '4px 10px', borderRadius: '12px' }}>{isExpanded ? '收起 ▲' : '展开详情 ▼'}</div>
      </div>
      <div style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px', letterSpacing: '2px' }}>{mentor.name}</h2>
        <p style={{ fontSize: '16px', color: '#e63946', fontWeight: '600', marginBottom: '20px', lineHeight: '1.4' }}>{mentor.title}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {mentor.highlights.map((item, index) => (<span key={index} style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', padding: '8px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500', display: 'inline-block', boxShadow: '0 2px 8px rgba(102,126,234,0.3)' }}>{item}</span>))}
        </div>
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '16px', borderLeft: '4px solid #667eea' }}>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>🏆 {mentor.experience}</p>
        </div>
        {isExpanded && mentor.details && (
          <div style={{ marginTop: '20px' }}>
            <div style={{ background: 'linear-gradient(135deg, #f0f4ff, #fff)', borderRadius: '16px', padding: '16px', marginBottom: '12px', border: '1px solid #e0e7ff' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#667eea', marginBottom: '12px' }}>🎯 专攻方向</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {mentor.details.specialty.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#667eea', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '13px', color: '#444' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #fff5f5, #fff)', borderRadius: '16px', padding: '16px', marginBottom: '12px', border: '1px solid #ffe0e0' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#e63946', marginBottom: '12px' }}>🏅 主要成就</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {mentor.details.achievements.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e63946', flexShrink: 0 }}></div>
                      {index < mentor.details.achievements.length - 1 && (<div style={{ width: '2px', height: '24px', background: 'linear-gradient(to bottom, #e63946, #ffcdd2)' }}></div>)}
                    </div>
                    <div>
                      {item.year && <span style={{ fontSize: '12px', color: '#e63946', fontWeight: '600', marginRight: '6px' }}>{item.year}</span>}
                      <span style={{ fontSize: '13px', color: '#444' }}>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #f0fff4, #fff)', borderRadius: '16px', padding: '16px', border: '1px solid #c8e6c9' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#43a047', marginBottom: '12px' }}>📜 专业资质</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {mentor.details.certifications.map((item, index) => (
                  <span key={index} style={{ background: '#e8f5e9', color: '#2e7d32', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', border: '1px solid #c8e6c9' }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const handleToggle = (id: number) => { setExpandedId(expandedId === id ? null : id) }
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f0f4ff 0%, #fff5f5 50%, #f0fff4 100%)' }}>
      <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', padding: '40px 20px 50px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(230,57,70,0.3), transparent)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(102,126,234,0.3), transparent)', borderRadius: '50%' }} />
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '12px', position: 'relative', zIndex: 1, letterSpacing: '4px' }}>川跃维度</h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', fontWeight: '300', position: 'relative', zIndex: 1, letterSpacing: '2px' }}>专业导师团队</p>
        <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #e63946, #f77f00)', margin: '16px auto 0', borderRadius: '2px' }} />
      </div>
      <div style={{ textAlign: 'center', padding: '15px', color: '#667eea', fontSize: '14px', fontWeight: '500' }}>💡 点击导师卡片查看详细信息</div>
      <div style={{ padding: '0 16px 40px', maxWidth: '480px', margin: '0 auto' }}>
        {mentors.map((mentor) => (<MentorCard key={mentor.id} mentor={mentor} isExpanded={expandedId === mentor.id} onToggle={() => handleToggle(mentor.id)} />))}
      </div>
      <div style={{ background: '#1a1a2e', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '8px' }}>专业 · 专注 · 专心</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>川跃维度健身培训</p>
      </div>
    </main>
  )
}
