var d, h, m, s;
function init()
{
    s = '15';
    d = '15';
    h = '15';
    m = '15';
    clock();
}
function clock(){
    s--;
  if(s==0)
    {
      s=60;
      m--;
      if(m==0)
        {
          m=60;
          h--;
          if(h==0)
            {
              h=24;
            }
        }
    }
}