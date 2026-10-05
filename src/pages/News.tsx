import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Article {
  title: string;
  author: string;
  date: string;
  img: string;
  url: string;
  category: 'latest' | 'popular' | 'international' | 'local';
}

export const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'latest' | 'popular' | 'international' | 'local'>('latest');
  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get('q')?.toLowerCase() || '';

  const articles: Article[] = [
    {
      title: 'Partnership Agreement Signed',
      author: 'By: Times of Oman',
      date: '07th May 2019',
      img: '/assets/img/news/news-1.png',
      url: 'https://timesofoman.com/article/1254924/oman/education-partnership-agreement-signed',
      category: 'latest'
    },
    {
      title: 'Global Stamp Approval',
      author: 'By: Times News Service',
      date: '15th Aug 2021',
      img: '/assets/img/news/19.jpg',
      url: 'https://timesofoman.com/article/105452-omani-educational-institution-gets-global-stamp-of-approval',
      category: 'latest'
    },
    {
      title: 'اعتراف منظمة كوجنيا الأمريكية بـ GES',
      author: 'By: مسقط - الشبيبة',
      date: '12th Aug 2021',
      img: '/assets/img/news/19.jpg',
      url: 'https://shabiba.com/article/162472',
      category: 'latest'
    },
    {
      title: 'Alam Al-Iktisaad Awards 2022',
      author: 'By: Zawya Press Release',
      date: '02nd Oct 2022',
      img: '/assets/img/news/20.jpg',
      url: 'https://shabiba.com/article/162472',
      category: 'latest'
    },
    {
      title: 'Education Partnership Agreement Signed',
      author: 'By: Edu Council',
      date: '08th May 2019',
      img: '/assets/img/news/news-1.png',
      url: 'https://www.educouncil.gov.om/en/article.php?id=4468',
      category: 'latest'
    },
    {
      title: 'NCSI receives students from Al Shomoukh International School',
      author: 'By: Webadmin',
      date: '26th Oct 2017',
      img: '/assets/img/news/13.jpg',
      url: 'https://www.ncsi.gov.om',
      category: 'latest'
    },
    {
      title: 'Al Shomoukh International School holds a lecture on ethics, manners',
      author: 'By: Muscat Daily',
      date: '04th Nov 2019',
      img: '/assets/img/news/15.jpg',
      url: 'https://www.pressreader.com/oman/muscat-daily',
      category: 'latest'
    },
    {
      title: 'The National Museum of Oman - School Visit',
      author: 'By: @NM_OMAN',
      date: '30th Nov 2016',
      img: '/assets/img/news/8.jpg',
      url: 'https://twitter.com/nm_oman',
      category: 'latest'
    },
    // Popular
    {
      title: 'Partnership Agreement Signed',
      author: 'By: Times of Oman',
      date: '07th May 2019',
      img: '/assets/img/news/news-1.png',
      url: 'https://timesofoman.com/article/1254924/oman/education-partnership-agreement-signed',
      category: 'popular'
    },
    {
      title: 'Global Stamp of Approval for GES',
      author: 'By: Times News Service',
      date: '15th Aug 2021',
      img: '/assets/img/news/19.jpg',
      url: 'https://timesofoman.com',
      category: 'popular'
    },
    // International
    {
      title: 'Arab Child Conference',
      author: 'By: Faiza Al Kalbania',
      date: '21st June 2020',
      img: '/assets/img/news/4.jpg',
      url: 'https://alroya.om',
      category: 'international'
    },
    {
      title: 'Arab Child Conferences & Curriculum Development',
      author: 'By: Khalisa Bint Abdullah',
      date: '17th Nov 2017',
      img: '/assets/img/news/5.jpg',
      url: 'https://www.omandaily.om',
      category: 'international'
    },
    // Local
    {
      title: 'Parntnership Agreement Signed in Oman',
      author: 'By: Oman Daily',
      date: '07th May 2019',
      img: '/assets/img/news/news-1.png',
      url: 'https://www.omandaily.om',
      category: 'local'
    },
    {
      title: 'مدرسة الشموخ تحتفل بتخريج الدفعة الأولى من طلابها',
      author: 'By: Oman News Center',
      date: '30th April 2018',
      img: '/assets/img/news/7.jpg',
      url: 'https://www.youtube.com',
      category: 'local'
    },
    {
      title: 'منى آل سعيد ترعى حفل تدشين مدرسة الشموح العالمية',
      author: 'By: Al Watan',
      date: '13th Feb 2015',
      img: '/assets/img/news/17.jpg',
      url: 'http://alwatan.com',
      category: 'local'
    }
  ];

  const displayedArticles = articles.filter(a => {
    const matchesCategory = a.category === activeTab || searchFilter.length > 0;
    const matchesSearch = searchFilter
      ? a.title.toLowerCase().includes(searchFilter) || a.author.toLowerCase().includes(searchFilter)
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container-fluid no-margin no-padding">
      <header className="internal">
        <Header isInternal={true} />
        <div className="banner">
          <div className="moving-circles5"></div>
          <div className="banner-title">
            <h1>Quality Assurance in Education.</h1>
            <h2>Changes in learning materials, teacher expectations, and student deliverables</h2>
          </div>
          <img src="/assets/img/news/banner.png" alt="News Banner" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          <div className="bottom-bg"></div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* News Section */}
        <section className="new-se text-center" style={{ padding: '60px 0' }}>
          <div className="container">
            <h1 style={{ color: '#1F265A', marginBottom: '30px' }}>All The News</h1>

            {searchFilter && (
              <div style={{ marginBottom: '20px', color: '#666' }}>
                Showing results for: <strong>"{searchFilter}"</strong>
              </div>
            )}

            {/* Navigation Filter Tabs */}
            {!searchFilter && (
              <div className="intro-news-filter d-flex justify-content-center mb-5">
                <div
                  role="tablist"
                  aria-label="News categories"
                  style={{
                    display: 'flex',
                    gap: '12px',
                    backgroundColor: '#f4f6fa',
                    padding: '6px',
                    borderRadius: '30px'
                  }}
                >
                  {(['latest', 'popular', 'international', 'local'] as const).map((tab) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        border: 'none',
                        padding: '10px 24px',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: activeTab === tab ? '#1F265A' : 'transparent',
                        color: activeTab === tab ? '#fff' : '#555'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* News Grid */}
            <div className="row text-left">
              {displayedArticles.map((article, idx) => (
                <div className="col-12 col-md-6 mb-4" key={idx}>
                  <article
                    className="single-blog-post style-2"
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div className="blog-thumbnail" style={{ height: '220px', overflow: 'hidden' }}>
                      <a href={article.url} target="_blank" rel="noreferrer" aria-label={`Read article: ${article.title}`}>
                        <img
                          src={article.img}
                          alt={article.title}
                          width="400"
                          height="220"
                          loading="lazy"
                          decoding="async"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                        />
                      </a>
                    </div>
                    <div className="blog-content" style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span className="post-date" style={{ color: '#E53238', fontSize: '13px', fontWeight: 'bold' }}>
                        {article.date}
                      </span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="post-title"
                        style={{
                          color: '#1F265A',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          margin: '10px 0',
                          textDecoration: 'none',
                          lineHeight: '1.4'
                        }}
                      >
                        {article.title}
                      </a>
                      <div style={{ marginTop: 'auto', color: '#888', fontSize: '13px' }}>
                        {article.author}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
